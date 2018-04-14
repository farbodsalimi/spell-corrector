# spell-checker

Spelling corrector based on [norvig](http://norvig.com/spell-correct.html) algorithm.

## Diagram

![ffi diagram](https://raw.githubusercontent.com/farbodsalimi/spell-checker/master/diagram.png)

## 🍕 Get Started

### Building

```bash
yarn install
```

### Installation

```bash
yarn build
```

### Development

```bash
yarn dev
```

### Production

🚨 Note: You need to have [PM2](http://pm2.keymetrics.io/) installed for this command

```bash
yarn prod
```

### Ready

```bash
curl http://localhost:3210/api/spell/\?word\=speling
{"corrected":"spelling"}
```
