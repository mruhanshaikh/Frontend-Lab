## Key Learnings
## Live : https://spotlighhtt.netlify.app/

- **9:16 container with 16:9 content**  
  Rotation alone does not fix layout issues. When a vertical container holds horizontal content, layout geometry must be corrected (width/height logic) along with rotation.

- **Spotlight effect with radial gradient**  
  Cursor-based visual effects are expensive to render. Updates must be synchronized with the browser’s render loop to avoid lag and flickering.

- **Mobile compatibility**  
  Desktop mouse events do not work on touch devices. Interactive effects must account for mobile input behavior to work consistently across devices.

### Core Insight
Layout ≠ transform,  
events ≠ frames,  
desktop ≠ mobile.
