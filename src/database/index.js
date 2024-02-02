class DataBase {
  constructor() {
    this.init()
  }
}

init(){
  this.connection = new Sequelize(
    'postgresql://postgres:fDca5g4aCd*b1eA13-D-443cb33fbbdc@roundhouse.proxy.rlwy.net:39797/railway'
  )
}