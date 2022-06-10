#include <string>

std::string even_or_odd(int number) 
{
  std::string result;
  if(number % 2 == 0){
    result = "Even";
  } else {
    result = "Odd";
    }
  return result;
}