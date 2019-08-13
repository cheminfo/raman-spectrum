export function getAnnotations(spectrum, options = {}) {
  const { fillColor = 'green', strokeColor = 'red', creationFct } = options;
  const peaks = spectrum.peaks;
  if (!peaks) return [];
  let annotations = peaks.map(peak => {
    var annotation = {
      line: 1,
      type: 'rect',
      strokeColor: strokeColor,
      strokeWidth: 0,
      fillColor: fillColor
    };
    if (creationFct) {
      creationFct(annotation, peak);
    }
    oneAnnotation(annotation, peak);
    return annotation;
  });

  return annotations;
}

function oneAnnotation(annotation, peak) {
  annotation.label = [
    {
      text: peak.kind,
      size: '18px',
      anchor: 'middle',
      color: 'red',
      position: {
        x: peak.wavelength,
        y: peak.intensity,
        dy: '-15px'
      }
    }
  ];
  annotation.position = [
    {
      x: peak.wavelength,
      y: peak.intensity,
      dy: '-10px',
      dx: '-1px'
    },
    {
      x: peak.wavelength,
      y: peak.intensity,
      dy: '-5px',
      dx: '1px'
    }
  ];
}
