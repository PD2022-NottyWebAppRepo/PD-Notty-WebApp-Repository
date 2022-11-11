call set HTTP_PROXY=http://wwwproxy.kanazawa-it.ac.jp:8080
call set HTTPS_PROXY=http://wwwproxy.kanazawa-it.ac.jp:8080
call npm -g config set proxy http://wwwproxy.kanazawa-it.ac.jp:8080
call npm -g config set https-proxy http://wwwproxy.kanazawa-it.ac.jp:8080
call npm -g config set registry http://registry.npmjs.org/
pause