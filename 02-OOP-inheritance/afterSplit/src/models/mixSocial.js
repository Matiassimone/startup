const MixinSocial = Superclass => class extends Superclass {

    share(friendName) {
        this.emit("share-social", (friendName + " share " + this.title));
    }

    like(friendName) {
        this.emit("like-social", (friendName + " likes " + this.title));
    }
};

module.exports = MixinSocial;