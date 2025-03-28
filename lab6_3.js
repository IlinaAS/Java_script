from flask import Flask, request, render_template, jsonify
import random

app = Flask(__name__)

# Хранение результатов тестов
results = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/run_test', methods=['POST'])
def run_test():
    config_a = request.form.get('config_a')
    config_b = request.form.get('config_b')
    
    # Имитация тестирования
    result_a = random.uniform(0.5, 1.0)  # Имитация метрики для конфигурации A
    result_b = random.uniform(0.5, 1.0)  # Имитация метрики для конфигурации B
    
    results.append({'config_a': config_a, 'result_a': result_a, 'config_b': config_b, 'result_b': result_b})
    
    return jsonify({'result_a': result_a, 'result_b': result_b})

@app.route('/results')
def show_results():
    return render_template('results.html', results=results)

if __name__ == '__main__':
    app.run(debug=True)