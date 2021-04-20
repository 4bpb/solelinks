package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"time"
)



func main(){
	start := time.Now()
	url := "https://solelinks.com/api/portal/releases?page=1&searchKey=&upcoming=1"

	

	client := &http.Client{}
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Set("Host", "solelinks.com")
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Accept", "*/*")
	req.Header.Set("User-Agent", "SoleLinks/1.0.8 (com.SoleLinks.SoleLinksApp; build:1; iOS 14.4.2) Alamofire/4.9.0")
	req.Header.Set("Authorization", "Bearer 8tvP")
	req.Header.Set("app-version", "1.0.8")
	req.Header.Set("Accept-Language", "en-US;q=1.0")
	req.Header.Set("Cookie", "")

	res, _ := client.Do(req)
	body, err := ioutil.ReadAll(res.Body)
	checkError(err)
	t := time.Now()
	elapsed := t.Sub(start)
	bodyString := string(body)
	fmt.Printf("That Request Took : %s\n",elapsed)
	
	defer res.Body.Close()
	


	f, err := os.Create("Releases.txt")
	checkError(err)

	defer f.Close()
	//bytes := []byte(bodyString)
	data, _ := json.Marshal(bodyString)

	_, err2 := f.WriteString(string(data))
	checkError(err2)
	fmt.Println(len(data))
	
	//fmt.Println(string(data))
	fmt.Println("Releases Saved to ./Realses.txt")
	

	// var dat map[string]interface{}




	
	// json.Unmarshal(bytes, &dat)
	// checkError(err)

	// var str string
	// json.Unmarshal(dat)


	

}


func checkError(err error){
	if err != nil {
		fmt.Printf("The err is : %s \n",err)
		os.Exit(1)
	}
}


