# glue-path
Glue path with '\' or '/' depending on platform

#Usage
```bash
npm install --save glue-path
```

**API**
var glue = require('glue-path')
var path = glue(["path", "to", "someting"])
console.log(path)
// in my case im using osx the result will be;
// path/to/something
