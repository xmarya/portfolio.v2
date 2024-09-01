
1- Using useRef with <li> element only work for the last item in the list:

    explanation: useRef() hook doesn't create a aunique reference for each list item,
    tt will create the same reference for all the items because the reference (itemRef) created with useRef is overwritten in each iteration of the items.map() function. As a result, the reference will only point to the last rendered <li> element.

    solution: in short => making the ref an array of DOM elements like this => const targetRef = useRef([]);
        **note: the above line of code didn't come in the article, I came up with it because the code in the article had an error**
    the basic idea when using useRef on a list is that you need to have references for each item on the list. So, how are we going to do this? We can create an array of references dynamically for each item on the list. After that, you can use this reference to access a particular item on the list.

    **the source: https://dineshigdd.medium.com/how-to-use-react-useref-to-access-items-on-a-list-c5d33401d8dd**

To create a hover effect in React that mimics the behavior seen on platforms like YouTube, where a video plays or an image transitions to a GIF on hover, you can follow these steps. This example will demonstrate how to implement a video that plays upon hovering.

### Step-by-Step Implementation

1. **Set Up Your React Component**

   Create a new React component for your video hover effect.

   ```javascript
   import React, { useRef } from 'react';

   const VideoHover = () => {
       const videoRef = useRef(null);

       const handleMouseEnter = () => {
           videoRef.current.play();
       };

       const handleMouseLeave = () => {
           videoRef.current.pause();
           videoRef.current.currentTime = 0; // Reset to start
       };

       return (
           <div className="video-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <video ref={videoRef} width="400" muted>
                   <source src="path/to/your/video.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
               </video>
               <div className="hover-text">Hover to Play Video</div>
           </div>
       );
   };

   export default VideoHover;
   ```

2. **Add CSS for Styling**

   You can style the video container and the hover text to enhance the visual presentation.

   ```css
   .video-container {
       position: relative;
       width: 400px;
       overflow: hidden;
   }

   video {
       width: 100%;
       height: auto;
   }

   .hover-text {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       color: white;
       background-color: rgba(0, 0, 0, 0.5);
       padding: 10px;
       border-radius: 5px;
       opacity: 0;
       transition: opacity 0.3s;
   }

   .video-container:hover .hover-text {
       opacity: 1;
   }
   ```

3. **Usage**

   Now, you can use the `VideoHover` component anywhere in your application.

   ```javascript
   import React from 'react';
   import VideoHover from './VideoHover';

   const App = () => {
       return (
           <div>
               <h1>Hover Video Example</h1>
               <VideoHover />
           </div>
       );
   };

   export default App;
   ```

### Explanation

- **React Component**: The `VideoHover` component uses a `ref` to control the video element. The `handleMouseEnter` and `handleMouseLeave` functions manage the playback of the video.
  
- **CSS Styling**: The CSS ensures that the hover text appears centered over the video and fades in when the video is hovered over.

This approach effectively mimics the hover video effect seen on platforms like YouTube, allowing for an engaging user experience.