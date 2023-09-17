import matplotlib.pyplot as plt
from matplotlib import cm
import numpy as np

# Make data
X = np.arange(-2.5, 0.75, 0.25)
Y = np.arange(-1.5, 5, 0.5)
X, Y = np.meshgrid(X, Y)
R = np.sqrt(X**2 + Y**2)
Z = np.cos(R)

# Plot the surface
fig, ax = plt.subplots(subplot_kw={"projection": "3d"})
ax.plot_surface(X, Y, Z, vmin=Z.min() * 1.5, cmap=cm.Reds)

ax.set(xticklabels=[],
       yticklabels=[],
       zticklabels=[])

ax.set_facecolor("#ffffff")

plt.show()
