Webcam.set
({
   width: 350,
   height:360,
   image_format : 'png',
   png_quality:90
});

  camera = document.getElementById("webcam_view");

Webcam.attach(camera);   

function capture_snapshot()
{
    Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'">';
    })
}

   console.log('ml5 version: ', ml5.version);

   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EPmsMMzab/model.json' ,modelLoaded);

   function modelLoaded()
   {
     console.log('Model Loaded!');
   }
   function identify()
   {
     img = document.getElementById("captured_img");
     classifier.classify(img, gotResult);
   }
   function gotResult(error, results)
   {
     if (error) 
     {
       console.error(error);
     }
     else
     {
       console.log(results);
       document.getElementById("object_rec").innerHTML = results[0].label;
       document.getElementById("accuracy_rec").innerHTML = results[0].confidence.toFixed(2);
     }
   }

