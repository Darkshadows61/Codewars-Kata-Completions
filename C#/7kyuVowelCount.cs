using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = str.Count(c => "aeiou".Contains(Char.ToLower(c)));
        return vowelCount;
    }
}
