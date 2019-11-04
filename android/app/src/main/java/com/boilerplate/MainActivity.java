package com.boilerplate;

import com.reactnativenavigation.NavigationActivity;
import android.os.Bundle;
import android.graphics.Color;
import androidx.annotation.Nullable;
import android.content.res.Resources;

import android.view.View;
import android.widget.LinearLayout;
import android.widget.ImageView;
import android.view.Gravity;

public class MainActivity extends NavigationActivity {

  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState){
    super.onCreate(savedInstanceState);

    //View splash = new View(this);
    LinearLayout splash = new LinearLayout(this);
    splash.setBackgroundColor(getResources().getColor(R.color.snow));
    splash.setGravity(Gravity.CENTER);

    LinearLayout view = new LinearLayout(this);
    ImageView imageView = new ImageView(this);
    imageView.setImageDrawable(getResources().getDrawable(R.drawable.logo,null));

    LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(dpToPx(150),dpToPx(150));
    layoutParams.gravity = Gravity.CENTER;
    imageView.setLayoutParams(layoutParams);

    splash.addView(imageView);

    setContentView(splash);
  }

  public static int dpToPx(int dp){
    return (int) (dp * Resources.getSystem().getDisplayMetrics().density);
  }

}
