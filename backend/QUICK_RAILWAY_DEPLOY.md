ackend/QUICK_RAILWAY_DEPLOY.md</path>
<content"># 🚀 Quick Railway Deployment Steps

## Ab tamne tamne GitHub ma code push kar diyo che. Railway ma deploy karva mate following steps follow karo:

### Step 1: Railway Ma Login Karo
1. [railway.app](https://railway.app) ma jai ne login karo
2. "New Project" dabdo

### Step 2: GitHub Repository Select Karo
1. "Deploy from GitHub repo" chuno
2. Repository select karo: `darshrailway10-sketch/umiyaji-dining-hall-railway`
3. "Deploy Now" dabdo

### Step 3: Environment Variables Set Karo

Railway dashboard ma following variables add karo:

```bash
NODE_ENV=production
PORT=10000
MONGODB_URI=your-mongodb-atlas-connection-string
JWT_SECRET=generate-a-strong-secret-key-here
ADMIN_NAME=Umiya Ji Dining Hall
ADMIN_EMAIL=admin@umiyajidining.com
ADMIN_PASSWORD=YourSecurePassword123!
FRONTEND_URL=https://your-frontend-url.com
```

### Step 4: MongoDB Setup Karo
1. [MongoDB Atlas](https://cloud.mongodb.com) ma account banavo
2. Free cluster banavo
3. Connection string copy karo
4. Railway variables ma MONGODB_URI update karo

### Step 5: Secret Key Generate Karo
```bash
# Tamne terminal ma run karo:
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
Jo output mils te JWT_SECRET ma fillo karo

### Step 6: Deploy Check Karo
1. Railway ma deploy process complete thava mate avo karo
2. Deployment successful thava pachhi URL mile
3. `https://your-app-name.railway.app/health` check karo

### ✅ Done! Tamne backend Railway ma host thai gayu che!

## Important URLs:

- **Health Check**: `https://your-app-name.railway.app/health`
- **API Base URL**: `https://your-app-name.railway.app/api/`
- **Login Endpoint**: `https://your-app-name.railway.app/api/auth/login`

## Next Steps:
1. Frontend ma backend URL update karo
2. CORS configuration update karvo
3. Full application test karo

Tamne tamne backend successfully Railway ma host thai gayu che! 🎉