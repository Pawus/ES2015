
/**
 * La classe TextIndexer permet d'indexer du text via la méthode indexText
 * 
 */
export class TextIndexer {
    constructor() {
        this.map = new Map();
    }

    /**
     * Permet d'indexer du texte. Chaque mot doit être rangé dans un Map.
     * Le map doit contenir tous les mots rencotrés associé au nombre de fois que le mot à été rencontré dans le texte.
     * Les fonctions String.split() et String.replace vous serons utiles !
     * @param text Le texte source à indexer
     */
    indexText(text) {
        text = text.replace(/[^a-zA-Z àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]/g, " ")
        tab = text.split(" ")
        for (word in text){
          if this.map.has(text){
            this.map.set(text, this.map.get(text) + 1)
          }
          else 
            this.map.set(text, 1)
        }
    }

    /**
     * Le poids d'un mot correspond au nombre de fois qu'il à été rencontré dans le texte.
     */
    getWeight(word) {
        return this.map.get(word)
    }

    /**
     * retourne le nombre de mots indexés
     */
    get count(){
        return this.map.size
    }
}

