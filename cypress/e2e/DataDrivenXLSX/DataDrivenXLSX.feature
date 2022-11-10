Feature: Data Driven with XLSX

    Scenario: Invalid login with Excel file
        Given J'accede a l'url
        When Le fichier excel est pret
        Then Utiliser XLSX pour se connecter

    Scenario: Invalid login with Json file
        Given J'accede a l'url
        When Le fichier excel est pret
        Then Utiliser Json pour se connecter