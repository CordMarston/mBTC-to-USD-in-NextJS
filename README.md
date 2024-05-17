
# mBtc to USD Converter in NextJS

I was tired of going to an exchange to get the BTC price, converting it to mBtc and then calculating the USD amount so I figured why not make a simple calculator.

The calculator was built in React in a Docker container with NextJS, Tailwind, and Web Sockets connecting to BitFinex to fetch the real time BTC price.

To run, make sure you have docker installed. Pull the repo, and run docker-compose up. The app will now be running on localhost:1744 - If you need to change the port you can do so my stopping the container, changing the port in the /DockerFile and then starting the container again. 
