import numpy as np

def cyclical_learning_rate(epoch, base_lr, max_lr, step_size):
    cycle = np.floor(1 + epoch / (2 * step_size))
    x = np.abs(epoch / step_size - 2 * cycle + 1)
    return base_lr + (max_lr - base_lr) * np.maximum(0, (1 - x))

def find_learning_rate(model, data_loader, criterion, initial_lr, final_lr, num_iterations):
lrs = np.linspace(initial_lr, final_lr, num_iterations)
losses = []

for lr in lrs:
    optimizer = optim.SGD(model.parameters(), lr=lr)
    for batch_X, batch_y in data_loader:
            optimizer.zero_grad()
            predictions = model(batch_X)
            loss = criterion(predictions, batch_y)
            loss.backward()
            optimizer.step()
            losses.append(loss.item())

    return lrs, losses

import matplotlib.pyplot as plt

lrs, losses = find_learning_rate(model, data_loader, criterion, 1e-6, 1, 100)
plt.plot(lrs, losses)
plt.xscale('log')
plt.xlabel('Learning Rate')
plt.ylabel('Loss')
plt.title('Learning Rate Finder')
plt.show()