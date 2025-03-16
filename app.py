from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/scoreboard')
def scoreboard():
    game = request.args.get('game', 'Unknown Game')
    return render_template('scoreboard.html', game=game)

if __name__ == '__main__':
    app.run(debug=True)
