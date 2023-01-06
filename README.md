# Geechat web application api Documentation

### Geechat est une application web de chat en temps reel entre les utilisateurs connectés à une meme base de donnée développée en reactjs du cote frontend, nodejs avec son framework express du cote backend et du cote base de données avec la technologie mongodb avec son ORM mongoose.
## API
La totalité de cet api a été ecrit et est toujours maintenu en nodejs à travers son framework **expressjs**. l'adresse principale de l'api est `https://api-geechat.onrender.com`.
## Les endpoints
Chaque endpoint correspond ici à un entré sur une partie de notre application. Etant un api de chat, les endpoints sont justement trop limités. il y en pas beaucoup contrairement aux autres api gigantesque comme celui de spotify, de google, de facebook ou encore celui de github. comme je l'ai dit tantot, chaque endpoint a son utlitité specifique. ce qui veut dire qu'un endpoint ne peut avoir des utilités ou faire deux choses à la fois. Par exemple celui de l'enregistrement ou la creation d'un utilisateur ne peut faire le travail de celui de l'authentification ou encore celui de l'envoie d'un message ne peut faire le travail de celui de la recuperation d'un message.
Voici quelques-uns de service que offre notre api :

  + `/register` : c'est par ce endpoint que l'utilisateur aura la possibilité de se créer un compte et de s'enregistrer.
  Comment l'utiliser ? Voici un exemple d'une requete faite grace à ce endpoint en javascript en utilisant axios qui est une dependance qui                 simplifie l'accès à une requete.
        
        
        
        ```
        /**Créer une fonction registerUser avec un block tryCatch pour bien nous permettre de faire la gestion d'erreur**/
        const registerUser = async(e) => {
            e.preventDefault();
            try{
                const user = {name, email, password}
                  const response = await axios.post(https://api-geechat.onrender.com+'/register',user)
                  if(response.data.status === 201){
                    console.log("L'utilisateur a été enregistré avec succès !");
                  }
            
            } catch (err) {
                console.log(err)
            }
        }
        ```
        
   + `/login` : c'est l'endpoint de l'authentification. il nous permet de verifier les information entrées par l'utilisateur si elles sont veridique.           Voici un exemple concret d'utilisation qui n'est pas bien loin de cleui de register toujours en javascript.
   
   
        ```
        const loginUser = async(e) =>{
            e.preventDefault();
            try {
              const userINF = {email, password}
              const response = await (await axios.post(https://api-geechat.onrender.com+'/login', userINF)).data;
              if(response.userToken) {
                console.log("Utilisateur existe")
              }

            } catch (error) {
              console.log(error);
            }
        }
        ```
    
    + `/sendmsg` : c'est l'endpoint qui nous permet d'envoyer un message à un autre utilisateur. ci-dessous un cas pratique avec javascript egalement.
    + `/getAllMessages` : Pour recuperer tous les messages de la base de donnée.
    + `/getallusers` : Pour recuperer tous les utilisateurs enregistres sur la base de donnée.
    + `/getUsers/:userId` : Pour repuerer un utilisateur specifique à partir de son **id**
    
    Voyons le cas de recuperation d'un utilisateur specifique à partir de son **id**.
    
    ```
        const getUser = async() => {
          if(id){
            const res = await (await axios.get('https://api-geechat.onrender.com'+'/getusers/'+userId)).data;
           console.log(res)
        }
    ```
        
        


