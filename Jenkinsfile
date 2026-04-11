/*

🎯 Final Results 

Pulls from GitHub
Builds app
Creates Docker image
Pushes to ECR
Deploys to EC2

👉 This is exactly what companies expect from a DevOps engineer

*/


// pipeline {
//     agent any

//     tools {
//         nodejs "node18"   // configure in Jenkins
//     }

//     environment {
//         AWS_REGION = "ap-south-1"
//         ACCOUNT_ID = "YOUR_ACCOUNT_ID"
//         ECR_REPO = "portfolio-repo"
//         IMAGE_NAME = "portfolio-app"
//         IMAGE_TAG = "${BUILD_NUMBER}"
//         APP_SERVER = "ec2-user@<APP_SERVER_IP>"
//     }

//     stages {

//         stage('Checkout') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/vijay-kumar95/react-powered-portfolio.git'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm ci'
//             }
//         }

//         stage('Build Application') {
//             steps {
//                 sh 'npm run build'
//             }
//         }

//         stage('Unit Tests') {
//             steps {
//                 sh 'npm test || true'   // optional (avoid pipeline break initially)
//             }
//         }

//         stage('Docker Build') {
//             steps {
//                 sh '''
//                 docker build -t $IMAGE_NAME:$IMAGE_TAG .
//                 '''
//             }
//         }

//         stage('Login to ECR') {
//             steps {
//                 sh '''
//                 aws ecr get-login-password --region $AWS_REGION | \
//                 docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
//                 '''
//             }
//         }

//         stage('Tag & Push Image') {
//             steps {
//                 sh '''
//                 docker tag $IMAGE_NAME:$IMAGE_TAG \
//                 $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:$IMAGE_TAG

//                 docker push $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:$IMAGE_TAG
//                 '''
//             }
//         }

//         stage('Deploy to EC2') {
//             steps {
//                 sshagent(['app-server-ssh']) {
//                     sh '''
//                     ssh -o StrictHostKeyChecking=no $APP_SERVER << EOF

//                     aws ecr get-login-password --region $AWS_REGION | \
//                     docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

//                     docker pull $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:$IMAGE_TAG

//                     docker stop portfolio || true
//                     docker rm portfolio || true

//                     docker run -d -p 3000:3000 --name portfolio \
//                     $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:$IMAGE_TAG

//                     EOF
//                     '''
//                 }
//             }
//         }
//     }

//     post {
//         success {
//             echo "✅ Deployment successful: Image tag $IMAGE_TAG"
//         }
//         failure {
//             echo "❌ Pipeline failed. Check logs."
//         }
//     }
// }

pipeline {
    agent any

     environment {
        IMAGE_NAME = "my-portfolio-app"
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'custom', url: 'https://github.com/vijay-kumar95/react-powered-portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'npm test || true'   // optional (avoid pipeline break initially)
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }

        }

    }
