#include <iostream>
#include <string>
#include <unordered_set>

int smallest_greater_number(int num)
{
    std::unordered_set<char> num_set;
    std::string num_str = std::to_string(num);

    for (char digit : num_str)
    {
        num_set.insert(digit);
    }

    while (true)
    {
        num++;
        std::string new_num_str = std::to_string(num);
        std::unordered_set<char> new_num_set;

        for (char digit : new_num_str)
        {
            new_num_set.insert(digit);
        }

        if (new_num_set.size() == 4)
        {
            return num;
        }
    }
}

int main()
{
    int num = 1234;
    int result = smallest_greater_number(num);
    std::cout << result << std::endl; // Output: 1235
    return 0;
}
