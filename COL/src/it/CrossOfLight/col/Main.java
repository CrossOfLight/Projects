package it.CrossOfLight.col;

import android.app.Activity;
import android.content.Context;
import android.media.MediaPlayer;
import android.media.SoundPool;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

public class Main extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        Handler timerLogo = new Handler();
        timerLogo.postDelayed(time_over,5000);
        Button play = (Button) findViewById(R.id.button1);
        final MediaPlayer media = MediaPlayer.create(this,R.raw.musica2);
        TextView nomeCanzone = (TextView)findViewById(R.id.textView2);
        nomeCanzone.setText("Skillet Monster");
        
        play.setOnClickListener(new View.OnClickListener() {
        boolean partito=false;
        
			@Override
			public void onClick(View v) {
				
				if (partito==false) {
					media.start();
					partito=true;
					Toast t=Toast.makeText(Main.this,"Play", Toast.LENGTH_SHORT);
					t.show();
				} else {
					media.pause();
					partito=false;
					Toast t=Toast.makeText(Main.this,"Stop", Toast.LENGTH_SHORT);
					t.show();
				}
			}
		});  
       
        
        
    }
    
  
  
    
    private Runnable time_over = new Runnable() {
        @Override
        public void run() {
        	   ImageView immagineLogo = (ImageView) findViewById(R.id.imageView1);
        	   immagineLogo.setVisibility(View.GONE);
        }
    };
   
}

