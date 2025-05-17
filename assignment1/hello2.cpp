#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Cell {
    int i, j;
    int subgrids_count;
};

// Function to generate optimal grid that maximizes sum of MEX values
vector<vector<int>> generateOptimalGrid(int n) {
    vector<vector<int>> grid(n, vector<int>(n, -1));
    vector<Cell> cells;
    
    // Calculate how many subgrids each cell appears in
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            // A cell at (i,j) appears in (i+1)*(j+1)*(n-i)*(n-j) subgrids
            int count = (i+1) * (j+1) * (n-i) * (n-j);
            cells.push_back({i, j, count});
        }
    }
    
    // Sort cells by number of subgrids they appear in (ascending)
    sort(cells.begin(), cells.end(), [](const Cell& a, const Cell& b) {
        return a.subgrids_count < b.subgrids_count;
    });
    
    // Assign values 0 to n²-1 in order of increasing subgrid presence
    for (int value = 0; value < n*n; value++) {
        int i = cells[value].i;
        int j = cells[value].j;
        grid[i][j] = value;
    }
    
    return grid;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int t;
    cin >> t;
    
    while (t--) {
        int n;
        cin >> n;
        
        vector<vector<int>> grid = generateOptimalGrid(n);
        
        // Print the grid
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cout << grid[i][j];
                if (j < n - 1) cout << " ";
            }
            cout << endl;
        }
    }
    
    return 0;
}