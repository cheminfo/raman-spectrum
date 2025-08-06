import { Analysis } from 'common-spectrum';
import { parse } from 'wdf-parser';

export function fromWDF(arrayBuffer) {
  let analysis = new Analysis();

  const parsed = parse(arrayBuffer);

  const fileHeader = parsed.fileHeader;
  const title = fileHeader.title;

  const xVariable = getXVariable(parsed.blocks);
  const yVariables = getYVariables(parsed.blocks);
  const origins = getOrigins(parsed.blocks);

  for (let i = 0; i < yVariables.length; i++) {
    const yVariable = yVariables[i];
    let origin = origins[i] || {};

    analysis.pushSpectrum(
      { x: { ...xVariable }, y: yVariable },
      {
        dataType: 'Raman',
        title,
        meta: { ...fileHeader, ...origin },
      },
    );
  }
  return analysis;
}

function getXVariable(blocks) {
  const xBlock = blocks.find(
    (block) => block.blockType === 'WDF_BLOCKID_XLIST',
  );
  return {
    label: xBlock.xList.units.replace(/(.*) \((.*)\)/, '$1'),
    units: xBlock.xList.units.replace(/(.*) \((.*)\)/, '$2'),
    data: xBlock.xList.values,
  };
}

function getYVariables(blocks) {
  const dataBlock = blocks.find(
    (block) => block.blockType === 'WDF_BLOCKID_DATA',
  );
  const yVariables = [];
  for (let spectrum of dataBlock.spectrum) {
    yVariables.push({
      label: 'Arbitrary Intensity',
      data: spectrum,
    });
  }
  return yVariables;
}

function getOrigins(blocks) {
  const originBlock = blocks.find(
    (block) => block.blockType === 'WDF_BLOCKID_ORIGIN',
  );
  if (!originBlock) return [];

  const xPositions = originBlock.origins.find((entry) => entry.label === 'X');
  const yPositions = originBlock.origins.find((entry) => entry.label === 'Y');

  if (!xPositions || !yPositions) return [];

  const origins = [];
  for (let i = 0; i < xPositions.axisOrigins.length; i++) {
    origins.push({
      xPositionUnits: xPositions.unit,
      yPositionUnits: yPositions.unit,
      xPosition: xPositions.axisOrigins[i],
      yPosition: yPositions.axisOrigins[i],
    });
  }
  return origins;
}
