package it.Dam.Application;

import android.R;
import android.app.Activity;
import android.content.Intent;
import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.*;
import android.view.View.*;
import android.widget.*;

public class Main extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(0x7f030018);
        Button bottone1 = (Button) findViewById(R.id.button2);
        Button bottone2 = (Button) findViewById(R.id.button1);
    	bottone1.setOnClickListener(new OnClickListener() {
    		@Override
    		public void onClick(View v) {
    			clickSuBottone1();
    		}
    	});
    	bottone2.setOnClickListener(new OnClickListener() {
    		@Override
    		public void onClick(View v) {
    			startActivity(new Intent(Main.this,SecondActivity.class));
    		}
    	});
    }
    

	private void clickSuBottone1() {
    	Toast toast = Toast.makeText(this,"App Sviluppata da Dante,De giacomo e Gervasoni",Toast.LENGTH_SHORT);
    	toast.show();
    }
    
    

   
}