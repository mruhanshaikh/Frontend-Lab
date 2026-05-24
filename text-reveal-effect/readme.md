## Live - https://matrix-text-revealed.netlify.app/ 
## Learnings & Improvements

- **Matrix-style text revealed**
  Used an `iteration` progress variable to gradually reveal original characters while replacing unrevealed ones with random letters.

- **Index-based reveal logic**
  Controlled rendering using `i < iteration`, separating *when* a character is allowed to appear from *what* is rendered.

- **Async & interval understanding**
  Learned that `setInterval` runs asynchronously and must be stopped **inside** its callback when the logical task is complete.

- **Performance optimization**
  Precomputed static data (original text array and alphabet array) to avoid unnecessary work on every frame.

- **State vs animation clarity**
  Understood that animation logic may already reach the final state, and extra DOM writes are optional defensive guarantees—not always required.

### Core Insight
Animation is about **progress control**,  
intervals need **explicit cleanup**,  
and static data should be **computed once**.
