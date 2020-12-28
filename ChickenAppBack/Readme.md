# titalab-tita
	Proyecto de chickenApp

## deploy
	##Seleccionar el proyecto

	##Desplegar el proyecto

## dependencies
	composer require "grpc/grpc:^v1.27.0"
	composer require google/cloud-firestore
	#composer require twilio/sdk
	#composer require vlucas/phpdotenv

# Seleccionar el proyecto
gcloud config set project chickenapp-dev

# Para subir a Google Cloud
gcloud app deploy app.yaml --project chickenapp-dev --version alpha-001

# Link pagina
https://php73-dot-chickenapp-dev.uc.r.appspot.com