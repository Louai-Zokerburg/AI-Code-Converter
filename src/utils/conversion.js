export const defaultConversion = {
  sourceLang: 'javascript',
  sourceCode: `
    /*
     *
     * Default Language is Javascript
     * This is sample code
     * DFS algorithm in JavaScript
     * 
    */
  
    function dfs(graph, start, visited = new Set()) {
      visited.add(start);
    
      console.log(start);
    
      for (let next of graph[start]) {
        if (!visited.has(next)) {
          dfs(graph, next, visited);
        }
      }
    
      return visited;
    }
    
    const graph = {
      '0': new Set(['1', '2']),
      '1': new Set(['0', '3', '4']),
      '2': new Set(['0']),
      '3': new Set(['1']),
      '4': new Set(['2', '3']),
    };
    
    dfs(graph, '0');
    
    `,
  targetLang: 'python',
  targetCode: `
    ''' Translated Code
     * 
     * - default output language is Python
     * - you can coppy the output code
     * - you can specify the output language
     * - 30+ languages are supported
     * 
    '''


    # DFS algorithm in Python


    # DFS algorithm
    def dfs(graph, start, visited=None):
        if visited is None:
            visited = set()
        visited.add(start)

        print(start)

        for next in graph[start] - visited:
            dfs(graph, next, visited)
        return visited


    graph = {'0': set(['1', '2']),
            '1': set(['0', '3', '4']),
            '2': set(['0']),
            '3': set(['1']),
            '4': set(['2', '3'])}

    dfs(graph, '0')
  `,
};

export const newConversion = {
  sourceLang: 'javascript',
  sourceCode: `
    /*
     * 
     * Default Lang is Javascript
     * Write your code here
     * You Can shooose any of the 30 languages supported
     * 
    */

    console.log("Hello Wrold");
  `,
  targetLang: 'python',
  targetCode: `
    '''

    Defualt Lang is Python
    Output code will show here once
    you hit the (Convert Code) button

    '''

    print("Hello World")
  `,
};
