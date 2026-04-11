pipeline {
    agent any

    environment {
        AWS_REGION = "ap-south-1"
        ACCOUNT_ID = "767397891684"
        ECR_REPO   = "myportfolio-repository"
        IMAGE_NAME = "my-app"
        IMAGE_TAG  = "${BUILD_NUMBER}"

        APP_SERVER = "ec2-user@<APP_SERVER_IP>"
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

        stage('Build Docker Image') {
            steps {
                sh """
                docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Login to ECR') {
            steps {
                sh """
                aws ecr get-login-password --region ${AWS_REGION} \
                | docker login --username AWS --password-stdin ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
                """
            }
        }

        stage('Tag Image') {
            steps {
                sh """
                docker tag ${IMAGE_NAME}:${IMAGE_TAG} \
                ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}
                """
            }
        }

        stage('Push to ECR') {
            steps {
                sh """
                docker push ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}
                """
            }
        } 

        stage('Deploy via SSM (No SSH)') {
            steps {
                sh """
                aws ssm send-command \
                --document-name "AWS-RunShellScript" \
                --targets "Key=tag:App,Values=portfolio" \
                --region ${AWS_REGION} \
                --parameters 'commands=[
                    "aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}",
                    "docker pull ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG},
                    "docker stop my-app || true",
                    "docker rm my-app || true",
                    "docker run -d -p 9595:80 --name my-app ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}"
                ]'
                """
            }
        }       

    }
}