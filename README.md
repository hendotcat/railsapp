# rails app

Uses Action Cable & Redis to implement simple Periscope-style hearts broadcasted in real time to all site visitors. Open https://hendotcat-railsapp.herokuapp.com in a couple of different browser windows at once to see it in action.

![Demo GIF](https://raw.githubusercontent.com/hendotcat/railsapp/trunk/demo.gif)

### Setup

It only needs Redis for production mode so the following works fine for local development. Please excuse the unnecessary `mysql2` gem. It's only here because I wanted to get the inevitable setup pains out of the way for other work.

```
git clone git@github.com:hendotcat/railsapp.git
cd railsapp
bundle install
yarn
rails server
```

