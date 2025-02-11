from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/balloons')
def balloons():
    return render_template('balloons.html')

@app.route('/wishes')
def wishes():
    return render_template('wishes.html')

@app.route('/quotes')
def quotes():
    return render_template('quotes.html')

if __name__ == '__main__':
    app.run(debug=True)
