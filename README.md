# Type/Code Development Exercise

I solved this assessment using a Rails Backend(JSON API), PostgreSQL database, and React.js frontend.

To run the application locally, please follow the steps below.

### Installations

In order to run this application locally, you need to following tools installed on your computer.

#### Ruby On Rails
 [Installation Instructions](http://railsapps.github.io/installrubyonrails-mac.html)

#### PostgreSQL
 [Installation Instructions](https://gist.github.com/sgnl/609557ebacd3378f3b72)

#### NPM/Node
  [Installation Instructions](http://blog.teamtreehouse.com/install-node-js-npm-mac)

### Configuring Locally

  Clone the repository and navigate to the repository folder via your command line.
  Once inside of the repository folder, navigate into the `typecodeapp` folder.

  From the `typecodeapp` folder, first install the ruby dependencies by running the commands:

    `gem install bundler`
    `bundle install`

  Once you have successfully installed the gems, install FrontEnd dependencies by running the command:

    `npm install`

  Setup your database by running the command:

    `bundle exec rake db:setup`

  This command will automatically seed the database with the five records asked for in the assessment prompt. The seed file can be found in `db/seeds.rb`.

### Running Locally

  To run this application locally, start your local Rails server by running the command:

    `rails s`

  Navigate to http://localhost:3000/ via your browser. Since page navigation was not required
  for this assessment, I suggest starting at one of the URLs below. You can edit the title inline by clicking
  the edit button or simply clicking the title.

  http://localhost:3000/#/article/i-dwell-in-possibility

  http://localhost:3000/#/article/i-have-seen-the-future-and-it-doesnt-work

  http://localhost:3000/#/article/we-dont-get-offered-crises-they-arrive

  http://localhost:3000/#/article/it-is-impossible-to-walk-rapidly-and-be-unhappy

  http://localhost:3000/#/article/knowledge-is-power

  If you would like to modify anything on the FrontEnd of the application, be sure to open another terminal tab in
  addition do your rails server and run webpack with the command:

  `webpack --watch`

  This will instantly compile any changes made to the React frontend. 
