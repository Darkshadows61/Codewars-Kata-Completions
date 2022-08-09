#include <vector>
#include <algorithm>
using namespace std;

int min(vector<int> list) 
{
  return *(min_element(list.begin(), list.end()));
}

int max(vector<int> list) 
{
  return *(max_element(list.begin(), list.end()));
}