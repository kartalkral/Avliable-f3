class MockDataGenerator {
  constructor() {
    this.data = {
      fps: 60,
      temperature: 45,
      memoryUsed: 65,
      memoryUsedMB: 1024,
      memoryTotal: 1568,
      allocatedPercent: 40,
      allocatedMB: 627,
      position: {
        x: 128.5,
        y: 64.0,
        z: 256.3
      },
      blockPosition: {
        x: 128,
        y: 64,
        z: 256
      },
      chunkPosition: {
        x: 0,
        y: 4,
        z: 0,
        chunkX: 8,
        chunkZ: 16
      },
      facing: {
        direction: 'north',
        axis: 'Towards negative Z',
        degrees: 0.0
      },
      light: {
        client: 15,
        sky: 15,
        block: 0
      },
      biome: {
        name: 'plains'
      },
      difficulty: {
        local: 0.75,
        day: 1
      },
      dimension: 'overworld',
      time: {
        current: 1000,
        day: 1
      },
      weather: {
        current: 'clear',
        duration: 12000
      },
      sounds: {
        playing: 5,
        total: 247,
        ambient: 0
      },
      java: {
        version: '1.8.0_51 64bit'
      },
      memory: {
        used: 1024,
        total: 1568
      },
      cpu: {
        name: 'Intel i7-8700K'
      },
      gpu: {
        name: 'NVIDIA RTX 3070'
      },
      display: {
        resolution: '1920x1080'
      },
      // Movement variables
      movementSpeed: 0.1,
      rotationSpeed: 0.5,
      direction: 1,
      timeCounter: 0
    };
    
    this.biomes = ['plains', 'forest', 'desert', 'mountains', 'ocean', 'swamp', 'taiga', 'savanna'];
    this.weatherTypes = ['clear', 'rain', 'thunder'];
    this.directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
    this.directionAxes = [
      'Towards negative Z',
      'Towards positive X and negative Z',
      'Towards positive X',
      'Towards positive X and positive Z',
      'Towards positive Z',
      'Towards negative X and positive Z',
      'Towards negative X',
      'Towards negative X and negative Z'
    ];
  }

  getInitialData() {
    return { ...this.data };
  }

  updateData() {
    // Update time counter
    this.data.timeCounter += 1;
    
    // Simulate player movement
    this.data.position.x += (Math.sin(this.data.timeCounter * 0.02) * this.data.movementSpeed);
    this.data.position.z += (Math.cos(this.data.timeCounter * 0.02) * this.data.movementSpeed);
    this.data.position.y += (Math.sin(this.data.timeCounter * 0.01) * 0.05);
    
    // Update block position
    this.data.blockPosition.x = Math.floor(this.data.position.x);
    this.data.blockPosition.y = Math.floor(this.data.position.y);
    this.data.blockPosition.z = Math.floor(this.data.position.z);
    
    // Update chunk position
    this.data.chunkPosition.chunkX = Math.floor(this.data.position.x / 16);
    this.data.chunkPosition.chunkZ = Math.floor(this.data.position.z / 16);
    this.data.chunkPosition.x = Math.floor(this.data.position.x) % 16;
    this.data.chunkPosition.z = Math.floor(this.data.position.z) % 16;
    
    // Update facing direction
    this.data.facing.degrees += this.data.rotationSpeed;
    if (this.data.facing.degrees >= 360) {
      this.data.facing.degrees = 0;
    }
    
    const directionIndex = Math.floor(this.data.facing.degrees / 45);
    this.data.facing.direction = this.directions[directionIndex];
    this.data.facing.axis = this.directionAxes[directionIndex];
    
    // Simulate FPS fluctuations
    this.data.fps = Math.floor(58 + Math.random() * 4);
    
    // Simulate memory usage changes
    this.data.memoryUsed = Math.floor(60 + Math.random() * 10);
    this.data.memoryUsedMB = Math.floor(1000 + Math.random() * 100);
    
    // Simulate temperature changes
    this.data.temperature = Math.floor(40 + Math.random() * 10);
    
    // Update light levels based on position
    this.data.light.sky = Math.floor(12 + Math.random() * 4);
    this.data.light.block = Math.floor(Math.random() * 8);
    this.data.light.client = Math.max(this.data.light.sky, this.data.light.block);
    
    // Occasionally change biome
    if (Math.random() < 0.01) {
      this.data.biome.name = this.biomes[Math.floor(Math.random() * this.biomes.length)];
    }
    
    // Update time
    this.data.time.current += 1;
    if (this.data.time.current >= 24000) {
      this.data.time.current = 0;
      this.data.time.day += 1;
    }
    
    // Occasionally change weather
    if (Math.random() < 0.005) {
      this.data.weather.current = this.weatherTypes[Math.floor(Math.random() * this.weatherTypes.length)];
      this.data.weather.duration = Math.floor(Math.random() * 20000);
    } else {
      this.data.weather.duration = Math.max(0, this.data.weather.duration - 1);
    }
    
    // Update sounds
    this.data.sounds.playing = Math.floor(3 + Math.random() * 5);
    this.data.sounds.total = Math.floor(240 + Math.random() * 20);
    this.data.sounds.ambient = Math.floor(Math.random() * 3);
    
    // Update difficulty
    this.data.difficulty.local = Math.max(0, Math.min(1, 0.5 + Math.sin(this.data.timeCounter * 0.001) * 0.3));
    
    return { ...this.data };
  }
}

export const mockData = new MockDataGenerator();