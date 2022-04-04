document.getElementById('btn').addEventListener('click',run)

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        // this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.edgeTo = [];
    this.hasPathTo = hasPathTo;
    this.pathTo = pathTo;
}
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        console.log('Vertex: ' + i);
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined)
                console.log('\tEdge -> ' + this.adj[i][j]);
        }
        console.log('\n');
    }
}
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log("Visited vertex: " + v);
    }
    for (var w of this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue
        if (v !== undefined) {
            console.log("Visited vertex: " + v);
        }
        for (var w of this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}
function hasPathTo(v) {
    return this.marked[v];
}
function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(s);
    return path;
}
function run() {
    g = new Graph(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    // g.showGraph();
    // g.dfs(0);
    // g.bfs(2);
    var vertex = 4;
    var paths = g.pathTo(vertex);
    while (paths.length > 0) {
        if (paths.length > 1) {
            console.log(paths.pop() + '-');
        }
        else {
            console.log(paths.pop());
        }
    }
}