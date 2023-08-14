const tiers = [];
const sTier = [];
const aTier = [];
const bTier = [];
const cTier = [];
const dTier = [];

const tierPusher = (gameStr, tierStr) => {
    const tierObj = {tier:tierStr, game:gameStr}
    tiers.push(tierObj)
}

const orgTier = (tierArray) => {
    tierArray.map((obj) =>{
        obj.tier == "S" ? sTier.push(obj)
        : obj.tier == "A" ? aTier.push(obj)
        : obj.tier == "B" ? bTier.push(obj)
        : obj.tier == "C" ? cTier.push(obj)
        : obj.tier == "D" ? dTier.push(obj) : null;
    })

}

tierPusher("jak 3", "S")
tierPusher("duelists of the roses", "A")
tierPusher("ratchet deadlocked","B")
tierPusher("world of warcraft","C")
tierPusher("fortnite","D")

console.log(...tiers)
orgTier(tiers)
console.log(...sTier)
console.log(...aTier)
console.log(...bTier)
console.log(...cTier)
console.log(...dTier)
console.log(...tiers)
