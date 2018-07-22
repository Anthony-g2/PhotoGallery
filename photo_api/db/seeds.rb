# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Photo.destroy_all

photos = Photo.create(
  [
    {
      url: 'https://timedotcom.files.wordpress.com/2015/09/daenerys-game-of-thrones-2.jpg?quality=85',
      desc: 'Mother of Dragons',
    },
    {
      url: 'https://nerdist.com/wp-content/uploads/2017/06/drogon-and-dany-game-of-thrones-featured.jpg',
      desc: 'Dracarys',
    },
    {
      url: 'https://images.immediate.co.uk/volatile/sites/3/2017/08/promo320627889.jpeg?quality=45&crop=25px,0px,3153px,2100px&resize=620,413',
      desc: 'Night King',
    },
    {
      url: 'https://i2-prod.mirror.co.uk/incoming/article10883698.ece/ALTERNATES/s615/Game-of-Thrones.jpg',
      desc: 'He\'s King of the North',
    },
    {
      url: 'https://cimg.tvgcdn.net/i/r/2018/02/01/8c06b694-82fa-45ce-a93a-196aaca1f0a0/crop/1380x1380+345+0/thumbnail/300x300/d6e553d328c997d4044015ce12935784/180201-game-of-thrones.jpg',
      desc: 'The Stark Children Reunited',
    },
  ]
)
