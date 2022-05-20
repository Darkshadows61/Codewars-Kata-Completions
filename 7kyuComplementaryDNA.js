//7kyu Complementary DNA
function DNAStrand(dna){
    const pairs = {'A':'T','T':'A','G':'C','C':'G'}
        return dna.split('').map(function(t){ return pairs[t]}).join('')
    }
    //test DNAStrand("ATTGC") = "TAAGC"