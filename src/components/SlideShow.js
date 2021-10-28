import React, { memo, useEffect, useState } from 'react';


const SlideShow = memo(({ settings }) => {
  const [state, setState] = useState({
    pos: 0,
    lastPos: 0,
  });
  useEffect(() => {
    rotateSlide();
  }, [])

  const rotateSlide = () => {
    setInterval(() => {
      let pos = state.pos
      let lastPos = state.lastPos
      lastPos = pos;
      pos++;

      if (pos >= settings.images.length) {
        pos = 0;
      }

      // Hide last image after a short delay.
      setTimeout(() => {
        lastPos = pos;
        setState((p) => ({ ...p, lastPos }));
      }, settings.delay / 2);

      setState({ lastPos, pos });
    }, settings.delay);
  }
  return (
    <div id="bg">
      {settings.images.map((image, i) => {
        return (
          <div
            key={image['url']}
            style={{
              backgroundPosition: image['position'],
              backgroundImage: `url("${image['url']}")`,
            }}
            className={
              i === state.pos ? 'visible top' : i === state.lastPos ? 'visible' : ''
            }
          />
        );
      })}
    </div>
  )
})

export default SlideShow
