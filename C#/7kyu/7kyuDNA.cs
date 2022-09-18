public class DnaStrand 
    {
        public static string MakeComplement(string dna)
        {
            return dna.Replace('T', '?').Replace('A', 'T').Replace('?', 'A').Replace('G', '?').Replace('C', 'G').Replace('?', 'C');
        }
    }