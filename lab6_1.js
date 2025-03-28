import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset

# Создание синтетического набора данных
X = torch.randn(1000, 10)  # 1000 образцов, 10 признаков
y = torch.randn(1000, 1)    # 1000 выходов

# Оборачивание данных в TensorDataset
dataset = TensorDataset(X, y)

# Определение переменного размера mini-batch
dynamic_batch_size = 32  # Это значение можно изменять

# Создание DataLoader
data_loader = DataLoader(dataset, batch_size=dynamic_batch_size, shuffle=True)

# Определение простой модели
model = nn.Sequential(
    nn.Linear(10, 20),
    nn.ReLU(),
    nn.Linear(20, 1)
)

# Определение оптимизатора и функции потерь
optimizer = optim.SGD(model.parameters(), lr=0.01)
criterion = nn.MSELoss()

# Цикл обучения
num_epochs = 5
for epoch in range(num_epochs):
    for batch_X, batch_y in data_loader:
        # Прямой проход
        predictions = model(batch_X)
        
        # Вычисление потерь
        loss = criterion(predictions, batch_y)
        
        # Обратное распространение и обновление параметров
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
    print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}")