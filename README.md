# Pathfinding Algorithm Visualizer
This visualizer is built in React and uses basic CSS animations to visualize pathfinding algorithms such as Dijkstra's algorithm. In this version, usage is incredibly simple. Click "New Graph" to generate a random undirected graph. Click "Solve" to use a pathfinding algorithm to visualize which nodes are explored and which path is discovered.
![image](https://raw.githubusercontent.com/joshlopez97/pathfinder-visualizer/master/public/screenshot1.png)
## Running in Development mode
To run this application in development mode, first clone this repository:
```
git clone https://github.com/joshlopez97/portfolio-site.git
cd portfolio-site/
```
Install dependencies:
### `npm install`
Start the application:
### `npm start`
Go to http://localhost:3000 to view it in the browser.
## Deployment
This website is deployed using [pm2](https://www.npmjs.com/package/pm2) through an NGINX proxy. To deploy on a production server, you can use the following method:
#### Install npm, node.js, and pm2
```
sudo apt install nodejs
npm install pm2 -g
```
#### Clone this repository and cd into it
```
git clone https://github.com/joshlopez97/portfolio-site.git
cd portfolio-site/
```
#### Create a production build and run it using pm2
```
npm install
npm run build
pm2 serve build
```
