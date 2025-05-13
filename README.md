# Autonomous Pesticide Deployment (APD)
## What is APD
- APD is a simulation web app designed to take input from the user and feed the data to our backend which runs a Reinforcement Learning (RL) algorithm called Q-learning to find the shortest possible route to travel from a single start state to a set of goal states while avoiding the obstacles in the pathway.
- APD is designed to be compact and to the point as it eliminates any unnecessary gimmicks and focuses on providing a intuitive interface to input data and to get a visualized output from the algorithm along with any required stats.
## How to use
- APD is hosted on vercel at https://apd-nextjs.vercel.app/
- Steps to follow:
  1. Enter the size of the Grid. you have options to choose from 3..=10 
  2. You have an option to enable/disable obstacles. Jump to ```v.``` if you decide to disable obstacles.
     
     ![image](https://github.com/user-attachments/assets/ae318a13-0080-45d5-a237-317b31108cb7)

  3. On enabling obstacles, You'll be shown the following screen. You get to choose the position of the obstacles in the grid to the right.
      - Conditions:
      - The number of obstacles are restrained based on the grid size that you choose. i.e. ```n-1``` where n is the grid size. This coontraint is in place to avoid filling up the entire grid which would inevitably cause the RL to fail in most cases.
        
     ![image](https://github.com/user-attachments/assets/196f4dfc-bab9-4c72-9595-123a22400396)
     
  4. On this page user gets to select upto n different grid sets (constraint due to processing limitation on our free server). Each set has it's own pair of start state and goal states. The user can submit the sets for RL model to process the input. For more info user can click on the ```Info?``` button for a detailed description of the project.

       ![image](https://github.com/user-attachments/assets/256bffb8-6599-4ac7-8168-4dbbf8111abc)

  5. After the RL model processes the data, the frontend will show a visualized shortest path contructed by the model for each of the sets submitted. Relevant stats are shown to the right for convenience.

       ![image](https://github.com/user-attachments/assets/27509e79-c702-401d-8ecf-8b822d2f5efb)
