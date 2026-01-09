from flask import Flask, render_template, url_for, redirect
import random
from flask import jsonify
app = Flask(__name__)
import time

# Lista com os nomes dos arquivos HTML (sem a extensão), em ordem


@app.route('/')
def index():
    return render_template('home.html')

@app.route('/obras')
def obras():
    return render_template('obras.html')

@app.route('/proximo')
def proximo():
    return render_template('proximo.html')

@app.route('/proximo2')
def proximo2():
    return render_template('proximo2.html')

@app.route('/proximo3')
def proximo3():
    return render_template('proximo3.html')

@app.route('/proximo4')
def proximo4():
    return render_template('proximo4.html')

@app.route('/manga')
def manga():
    return render_template('manga.html')

@app.route('/proximo5')
def proximo5():
    return render_template('proximo5.html')

@app.route('/avisos')
def avisos():
    return render_template('index.html')

@app.route('/aprenda')
def aprenda():
    return render_template('aprenda.html')

@app.route('/aula1')
def aula1():
    return render_template('aula 1.html')

@app.route('/beneficios')
def beneficios():
    return render_template('beneficios_de_desenhar.html')

@app.route('/inspiracao')
def inspiracao():
    return render_template('inspiracao.html', timestamp=int(time.time()))


@app.route('/api/inspiracao')
def api_inspiracao():
    sugestoes = [
        "Que tal desenhar algo calmo?",
        "Tente criar uma cena agitada!",
        "Imagine algo divertido.",
        "Desenhe algo que tenha somente uma cor.",
        "Crie um animalzinho feliz!",
        "Faça algo inspirado em algo que goste.",
        "Desenhe uma comida saborosa."
    ]
    sugestao = random.choice(sugestoes)
    return jsonify({'sugestao': sugestao})

if __name__ == '__main__':
    app.run(debug=True)
