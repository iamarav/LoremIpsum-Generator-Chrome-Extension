let ip;
var lines, words;
words = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Integer", "nec", "odio", "Praesent", "libero", "Sed", "cursus", "ante", "dapibus", "diam", "Sed", "nisi", "Nulla", "quis", "sem", "at", "nibh", "elementum", "imperdiet", "Duis", "sagittis", "ipsum", "Praesent", "mauris", "Fusce", "nec", "tellus", "sed", "augue", "semper", "porta", "Mauris", "massa", "Vestibulum", "lacinia", "arcu", "eget", "nulla", "Class", "aptent", "taciti", "sociosqu", "ad", "litora", "torquent", "per", "conubia", "nostra", "per", "inceptos", "himenaeos", "Curabitur", "sodales", "ligula", "in", "libero", "Sed", "dignissim", "lacinia", "nunc", "Curabitur", "tortor", "Pellentesque", "nibh", "Aenean", "quam", "In", "scelerisque", "sem", "at", "dolor", "Maecenas", "mattis", "Sed", "convallis", "tristique", "sem", "Proin", "ut", "ligula", "vel", "nunc", "egestas", "porttitor", "Morbi", "lectus", "risus", "iaculis", "vel", "suscipit", "quis", "luctus", "non", "massa", "Fusce", "ac", "turpis", "quis", "ligula", "lacinia", "aliquet", "Mauris", "ipsum", "Nulla", "metus", "metus", "ullamcorper", "vel", "tincidunt", "sed", "euismod", "in", "nibh", "Quisque", "volutpat", "condimentum", "velit", "Class", "aptent", "taciti", "sociosqu", "ad", "litora", "torquent", "per", "conubia", "nostra", "per", "inceptos", "himenaeos", "Nam", "nec", "ante", "Sed", "lacinia", "urna", "non", "tincidunt", "mattis", "tortor", "neque", "adipiscing", "diam", "a", "cursus", "ipsum", "ante", "quis", "turpis", "Nulla", "facilisi", "Ut", "fringilla", "Suspendisse", "potenti", "Nunc", "feugiat", "mi", "a", "tellus", "consequat", "imperdiet", "Vestibulum", "sapien", "Proin", "quam", "Etiam", "ultrices", "Suspendisse", "in", "justo", "eu", "magna", "luctus", "suscipit", "Sed", "lectus", "Integer", "euismod", "lacus", "luctus", "magna", "Quisque", "cursus", "metus", "vitae", "pharetra", "auctor", "sem", "massa", "mattis", "sem", "at", "interdum", "magna", "augue", "eget", "diam", "Vestibulum", "ante", "ipsum", "primis", "in", "faucibus", "orci", "luctus", "et", "ultrices", "posuere", "cubilia", "Curae;", "Morbi", "lacinia", "molestie", "dui", "Praesent", "blandit", "dolor", "Sed", "non", "quam", "In", "vel", "mi", "sit", "amet", "augue", "congue", "elementum", "Morbi", "in", "ipsum", "sit", "amet", "pede", "facilisis", "laoreet", "Donec", "lacus", "nunc", "viverra", "nec", "blandit", "vel", "egestas", "et", "augue", "Vestibulum", "tincidunt", "malesuada", "tellus", "Ut", "ultrices", "ultrices", "enim", "Curabitur", "sit", "amet", "mauris", "Morbi", "in", "dui", "quis", "est", "pulvinar", "ullamcorper", "Nulla", "facilisi", "Integer", "lacinia", "sollicitudin", "massa", "Cras", "metus", "Sed", "aliquet", "risus", "a", "tortor", "Integer", "id", "quam", "Morbi", "mi", "Quisque", "nisl", "felis", "venenatis", "tristique", "dignissim", "in", "ultrices", "sit", "amet", "augue", "Proin", "sodales", "libero", "eget", "ante", "Nulla", "quam", "Aenean", "laoreet", "Vestibulum", "nisi", "lectus", "commodo", "ac", "facilisis", "ac", "ultricies", "eu", "pede", "Ut", "orci", "risus", "accumsan", "porttitor", "cursus", "quis", "aliquet", "eget", "justo", "Sed", "pretium", "blandit", "orci", "Ut", "eu", "diam", "at", "pede", "suscipit", "sodales", "Aenean", "lectus", "elit", "fermentum", "non", "convallis", "id", "sagittis", "at", "neque", "Nullam", "mauris", "orci", "aliquet", "et", "iaculis", "et", "viverra", "vitae", "ligula", "Nulla", "ut", "felis", "in", "purus", "aliquam", "imperdiet", "Maecenas", "aliquet", "mollis", "lectus", "Vivamus", "consectetuer", "risus", "et", "tortor", "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Integer", "nec", "odio", "Praesent", "libero", "Sed", "cursus", "ante", "dapibus", "diam", "Sed", "nisi", "Nulla", "quis", "sem", "at", "nibh", "elementum", "imperdiet", "Duis", "sagittis", "ipsum", "Praesent", "mauris", "Fusce", "nec", "tellus", "sed", "augue", "semper", "porta", "Mauris", "massa", "Vestibulum", "lacinia", "arcu", "eget", "nulla", "Class", "aptent", "taciti", "sociosqu", "ad", "litora", "torquent", "per", "conubia", "nostra", "per", "inceptos", "himenaeos", "Curabitur", "sodales", "ligula", "in", "libero", "Sed", "dignissim", "lacinia", "nunc", "Curabitur", "tortor", "Pellentesque", "nibh", "Aenean", "quam", "In", "scelerisque", "sem", "at", "dolor", "Maecenas", "mattis", "Sed", "convallis", "tristique", "sem", "Proin", "ut", "ligula", "vel", "nunc", "egestas", "porttitor", "Morbi", "lectus", "risus", "iaculis", "vel", "suscipit", "quis", "luctus", "non", "massa", "Fusce", "ac", "turpis", "quis", "ligula", "lacinia", "aliquet", "Mauris", "ipsum", "Nulla", "metus", "metus", "ullamcorper", "vel", "tincidunt", "sed", "euismod", "in", "nibh", "Quisque", "volutpat", "condimentum", "velit", "Class", "aptent", "taciti", "sociosqu", "ad", "litora", "torquent", "per", "conubia", "nostra", "per", "inceptos", "himenaeos", "Nam", "nec", "ante", "Sed", "lacinia", "urna", "non", "tincidunt", "mattis", "tortor", "neque", "adipiscing", "diam", "a", "cursus", "ipsum", "ante", "quis", "turpis", "Nulla", "facilisi", "Ut", "fringilla", "Suspendisse", "potenti", "Nunc", "feugiat", "mi", "a", "tellus", "consequat", "imperdiet", "Vestibulum", "sapien", "Proin", "quam", "Etiam", "ultrices", "Suspendisse", "in", "justo", "eu", "magna", "luctus", "suscipit", "Sed", "lectus", "Integer", "euismod", "lacus", "luctus", "magna", "Quisque", "cursus", "metus", "vitae", "pharetra", "auctor", "sem", "massa", "mattis", "sem", "at", "interdum", "magna", "augue", "eget", "diam", "Vestibulum", "ante", "ipsum", "primis", "in", "faucibus", "orci", "luctus", "et", "ultrices", "posuere", "cubilia", "Curae;", "Morbi", "lacinia", "molestie", "dui", "Praesent", "blandit", "dolor", "Sed", "non", "quam", "In", "vel", "mi", "sit", "amet", "augue", "congue", "elementum", "Morbi", "in", "ipsum", "sit", "amet", "pede", "facilisis", "laoreet", "Donec", "lacus", "nunc", "viverra", "nec", "blandit", "vel", "egestas", "et", "augue", "Vestibulum", "tincidunt", "malesuada", "tellus", "Ut", "ultrices", "ultrices", "enim", "Curabitur", "sit", "amet", "mauris", "Morbi", "in", "dui", "quis", "est", "pulvinar", "ullamcorper", "Nulla", "facilisi", "Integer", "lacinia", "sollicitudin", "massa", "Cras", "metus", "Sed", "aliquet", "risus", "a", "tortor", "Integer", "id", "quam", "Morbi", "mi", "Quisque", "nisl", "felis", "venenatis", "tristique", "dignissim", "in", "ultrices", "sit", "amet", "augue", "Proin", "sodales", "libero", "eget", "ante", "Nulla", "quam", "Aenean", "laoreet", "Vestibulum", "nisi", "lectus", "commodo", "ac", "facilisis", "ac", "ultricies", "eu", "pede", "Ut", "orci", "risus", "accumsan", "porttitor", "cursus", "quis", "aliquet", "eget", "justo", "Sed", "pretium", "blandit", "orci", "Ut", "eu", "diam", "at", "pede", "suscipit", "sodales", "Aenean", "lectus", "elit", "fermentum", "non", "convallis", "id", "sagittis", "at", "neque", "Nullam", "mauris", "orci", "aliquet", "et", "iaculis", "et", "viverra", "vitae", "ligula", "Nulla", "ut", "felis", "in", "purus", "aliquam", "imperdiet", "Maecenas", "aliquet", "mollis", "lectus", "Vivamus", "consectetuer", "risus", "et", "tortor", "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Integer", "nec", "odio", "Praesent", "libero", "Sed", "cursus", "ante", "dapibus", "diam", "Sed", "nisi", "Nulla", "quis", "sem", "at", "nibh", "elementum", "imperdiet", "Duis", "sagittis", "ipsum", "Praesent", "mauris", "Fusce", "nec", "tellus", "sed", "augue", "semper", "porta", "Mauris", "massa", "Vestibulum", "lacinia", "arcu", "eget", "nulla", "Class", "aptent", "taciti", "sociosqu", "ad", "litora", "torquent", "per", "conubia", "nostra", "per", "inceptos", "himenaeos", "Curabitur", "sodales", "ligula", "in", "libero", "Sed", "dignissim", "lacinia", "nunc", "Curabitur", "tortor", "Pellentesque", "nibh", "Aenean", "quam", "In", "scelerisque", "sem", "at", "dolor", "Maecenas", "mattis", "Sed", "convallis", "tristique", "sem", "Proin", "ut", "ligula", "vel", "nunc", "egestas", "porttitor", "Morbi", "lectus", "risus", "iaculis", "vel", "suscipit", "quis", "luctus", "non", "massa", "Fusce", "ac", "turpis", "quis", "ligula", "lacinia", "aliquet", "Mauris", "ipsum", "Nulla", "metus", "metus", "ullamcorper", "vel", "tincidunt", "sed", "euismod", "in", "nibh", "Quisque", "volutpat", "condimentum", "velit", "Class", "aptent", "taciti", "sociosqu", "ad", "litora", "torquent", "per", "conubia", "nostra", "per", "inceptos", "himenaeos", "Nam", "nec", "ante", "Sed", "lacinia", "urna", "non", "tincidunt", "mattis", "tortor", "neque", "adipiscing", "diam", "a", "cursus", "ipsum", "ante", "quis", "turpis", "Nulla", "facilisi", "Ut", "fringilla", "Suspendisse", "potenti", "Nunc", "feugiat", "mi", "a", "tellus", "consequat", "imperdiet", "Vestibulum", "sapien", "Proin", "quam", "Etiam", "ultrices", "Suspendisse", "in", "justo", "eu", "magna", "luctus", "suscipit", "Sed", "lectus", "Integer", "euismod", "lacus", "luctus", "magna", "Quisque", "cursus", "metus", "vitae", "pharetra", "auctor", "sem", "massa", "mattis", "sem", "at", "interdum", "magna", "augue", "eget", "diam", "Vestibulum", "ante", "ipsum", "primis", "in", "faucibus", "orci", "luctus", "et", "ultrices", "posuere", "cubilia", "Curae;", "Morbi", "lacinia", "molestie", "dui", "Praesent", "blandit", "dolor", "Sed", "non", "quam", "In", "vel", "mi", "sit", "amet", "augue", "congue", "elementum", "Morbi", "in", "ipsum", "si"
]; // words ( you can change )
ip = {
    getElById ( el ){
        return document.getElementById( el );
    },
    getElByClass ( el ){
        return document.getElementsByClassName( el );
    },
    getWordsNumber(){
        return Math.round( Math.random() * 30 ); // just a random number for now
    },
    getRandomWord(){
        return words[ Math.round(Math.random() * 10) ];
    },
    getLines(){
        lines = ip.getElById( 'ip-lines' ).value;
        if( lines < 1 || lines === undefined || lines === NaN ){
            lines = 1;
        }
        return lines;
    },
    getParagraphLength(){
        paraLen = ip.getElById( 'ip-para' ).value;
        if( paraLen < 1 || paraLen === undefined || paraLen === NaN ){
            paraLen = 1;
        }
        return paraLen;
    },
    generateLoremIpsum(){
        lines = ip.getLines();
        para = ip.getParagraphLength();
        var output = ""; 
        for( var p = 1; p <= para; p++  )
        {
            for( var l = 1; l <= lines; l++  )
            {
                // for every line
                var wordCount = ip.getWordsNumber();
                for( var w = 1; w <= wordCount; w++  )
                {
                    output += ip.getRandomWord();
                    if( w != wordCount ){
                        output+=" ";
                    }
                }
                output += ". ";
            }
            output += "\n\n";
        }
        ipOutput.value = output;
    },
    copyOutput(){
        ipOutput.select();
        document.execCommand('copy');
    }
}
ipMainContainer = ip.getElById( 'ip-container' );
ipOutput = ip.getElById( 'ip-output' );
ip_ready();
if( ipMainContainer ) // if main container is loaded
{   
    copyButton = ip.getElById( 'ipCopyOutput' );
    ipMainContainer.addEventListener( 'change', function(){
        ip.generateLoremIpsum();
    });
    ipOutput.addEventListener( 'click', function(){
        // when user clicks on the textarea
        ip.copyOutput();
        alert( 'Copied!' );
    });
    copyButton.addEventListener( 'click', function(){
        // when user clicks on the button
        ip.copyOutput();
        alert( 'Copied!\nNote: You can also copy by clicking on the text!' );
    });
    ip.getElById( 'regenerateLoremIpsum' ).addEventListener( 'click', function(){
        // when regenerate button is clicked
        ip.generateLoremIpsum();
    });
}
else{console.log( 'Error.' )}
function ip_ready(){
    ip.generateLoremIpsum();
}