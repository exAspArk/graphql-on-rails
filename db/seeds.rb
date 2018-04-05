dhh = User.create!(name: 'dhh')
tenderlove = User.create!(name: 'tenderlove')
eileencodes = User.create!(name: 'eileencodes')

Post.create!(
  user: dhh,
  title: 'REST-in-peace API vs GraphQL',
  description: 'GraphQL is one of the most hot topics at RailsConf 2018. ts popularity is growing rapidly. A lot of companies such as Facebook, GitHub, Twitter, Coursera, Shopify are using it. Why?',
  content: %(
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
    <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
  ).squish,
  created_at: 7.days.ago
)

Post.create!(
  user: tenderlove,
  title: 'Making Client and Server Fit Together with GraphQL',
  description: 'What is GraphQL? Is it possible to gradually migrate an existing old Rails application to GraphQL?',
  content: %(
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
    <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
  ).squish,
  created_at: 3.days.ago
)

Post.create!(
  user: eileencodes,
  title: 'Should Rubyists learn modern JS?',
  description: 'React, Angular, Vue, Elm, Stimulus, etc. How to stay staying sane in this insane world?',
  content: %(
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
    <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
  ).squish
)
