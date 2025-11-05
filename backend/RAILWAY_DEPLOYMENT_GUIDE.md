ackend/RAILWAY_DEPLOYMENT_GUIDE.md</path>
<content"># Railway Ma Backend Host Karva Mate Complete Guide (Gujarati)

## Step 1: Railway Account Banavo

1. **Railway.app ma jai ne account banavo:**
   - [railway.app](https://railway.app) ma jai ne "Login" karo
   - GitHub, GitLab, ya email use kar ke sign up karo

## Step 2: Project Create Karvo

1. **New Project Banavo:**
   - Dashboard ma "New Project" button dabo
   - "Deploy from GitHub repo" chuno
   - Ya "Empty Project" choose karo

2. **Backend Directory Select Karvo:**
   - Tamne je repository ma backend che, te select karo
   - Backend folder (backend/) choose karo

## Step 3: Environment Variables Set Karvo

Railway dashboard ma environment variables add karvo:

### Required Variables:

```
NODE_ENV=production
PORT=10000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-super-secret-jwt-key-here
ADMIN_NAME=Umiya Ji Dining Hall
ADMIN_EMAIL=admin@umiyajidining.com
ADMIN_PASSWORD=YourSecurePassword123!
FRONTEND_URL=your-frontend-url
```

### Variables Kaise Add Karvo:

1. Project dashboard ma "Variables" tab dabo
2. "Add Variable" button dabdo
3. Variable name ane value fillo karo
4. "Add" dabdo

## Step 4: Database Add Karvo

1. **MongoDB Atlas Account Banavo:**
   - [MongoDB Atlas](https://cloud.mongodb.com) ma jai ne account banavo
   - New cluster banavo (free tier use karo)

2. **Database Connection String Copy Karvo:**
   - MongoDB Atlas ma "Connect" dabdo
   - "Connect your application" chuno
   - Connection string copy karvo

3. **Railway Variables ma MONGODB_URI Update Karvo:**
   - Railway ma jai ne variables tab ma jai
   - MONGODB_URI variable update karo with Atlas connection string

## Step 5: Deployment Process

1. **Automatic Deployment:**
   - Railway automatically deploy kare che jab tamne code push karo GitHub ma
   - Railway.toml file automatically detect thashe

2. **Manual Deployment:**
   - Railway dashboard ma "Deploy" dabdo
   - Ya "Redeploy" button use karo

## Step 6: Application Test Karvo

1. **Health Check:**
   - Railway ma deploy thava pachhi URL mils
   - `https://your-app-name.railway.app/health` ma jai ne test karo

2. **API Endpoints Test Karvo:**
   - `https://your-app-name.railway.app/api/auth/login` test karo
   - Postman ya frontend ma connect kar ke test karo

## Step 7: Frontend Update Karvo

Frontend ma backend URL update karvo:

1. **Environment Variables Update Karvo:**
   - Frontend environment file ma backend URL update karo:
   ```
   VITE_API_URL=https://your-app-name.railway.app
   ```

2. **CORS Configuration:**
   - Backend server.js ma Railway URL add karvo allowed origins ma

## Step 8: Monitoring ane Logs

1. **Railay Dashboard Ma:**
   - "Logs" tab ma dekho ke koi error to nathi
   - "Metrics" tab ma dekho ke koi performance issue to nathi

2. **Common Issues:**
   - MongoDB connection string check karo
   - Environment variables properly set che ke nahi
   - PORT environment variable set che ke nahi

## Step 9: Custom Domain Add Karvo (Optional)

1. **Custom Domain Banavo:**
   - Railway project settings ma "Domains" tab jai
   - "Custom Domain" dabdo
   - Domain name fillo karo

## Step 10: SSL Certificate

- Railway automatic SSL provide kare che
- HTTPS automatically enable thashe

## Important Notes:

1. **Free Plan Limitations:**
   - Free plan ma bandwith limits che
   - Application sleep thai shak che inactive thava pachhi

2. **Environment Variables Security:**
   - Sensitive information environment variables ma rako
   - Code ma hardcode ma rachvo nahi

3. **Database Security:**
   - MongoDB Atlas ma IP whitelist set karo
   - Strong username/password use karo

4. **Backup Strategy:**
   - Regular database backup enable karo
   - Important data no backup rakho

## Quick Commands:

```bash
# Local development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Troubleshooting:

1. **Deployment Failed:**
   - Logs check karo Railway dashboard ma
   - Environment variables properly set che ke nahi verify karo

2. **Database Connection Error:**
   - MongoDB Atlas IP whitelist ma Railway IP add karo
   - Connection string properly format che ke nahi check karo

3. **CORS Error:**
   - Backend server.js ma allowed origins update karo
   - Frontend URL properly set che ke nahi check karo

## Support:

- Railway Documentation: [docs.railway.app](https://docs.railway.app)
- Railway Discord community ma help mangi shako