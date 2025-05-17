#include <bits/stdc++.h>
using namespace std;

int minimal_operations(int n, int k, const vector<int>& a) {
    vector<int> cnt(k, 0);
    for (int num : a) cnt[num % k]++;
    if (k == 2 || k == 3 || k == 5) {
        int res = 0;
        for (int i = 1; i < k; ++i) res += cnt[i] * (k - i);
        return res;
    } else if (k == 4) {
        int res = 0, min13 = min(cnt[1], cnt[3]);
        res += min13;
        cnt[1] -= min13;
        cnt[3] -= min13;
        res += cnt[2] / 2;
        cnt[2] %= 2;
        res += cnt[1] / 4;
        cnt[1] %= 4;
        res += cnt[3] / 4;
        cnt[3] %= 4;
        if (cnt[2] && cnt[1] >= 2) { res += 1; cnt[2] = 0; cnt[1] -= 2; }
        else if (cnt[2] && cnt[3] >= 2) { res += 1; cnt[2] = 0; cnt[3] -= 2; }
        else if (cnt[2]) { res += 2; cnt[2] = 0; }
        if (cnt[1]) res += cnt[1];
        if (cnt[3]) res += cnt[3];
        return res;
    }
    return 0;
}

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, k;
        cin >> n >> k;
        vector<int> a(n);
        for (int& num : a) cin >> num;
        cout << minimal_operations(n, k, a) << endl;
    }
    return 0;
}