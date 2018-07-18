package com.boilerplate;

import com.facebook.react.modules.core.PermissionListener;
import com.reactnativenavigation.controllers.SplashActivity;

import android.content.res.Resources;
import android.support.annotation.NonNull;
import android.util.DisplayMetrics;
import android.util.Log;
import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.widget.ImageView;
import android.view.Gravity;
import android.support.v4.content.ContextCompat;
//import com.imagepicker.permissions.OnImagePickerPermissionsCallback;
import com.mixpanel.android.mpmetrics.MixpanelAPI;

public class MainActivity extends SplashActivity{
  private PermissionListener listener;

  @Override
  public LinearLayout createSplashLayout(){
    String projectToken = getResources().getString(R.string.mixpanel);
    MixpanelAPI mixpanel = MixpanelAPI.getInstance(this,projectToken);

    LinearLayout view = new LinearLayout(this);
    ImageView imageView = new ImageView(this);

    view.setBackgroundColor(getResources().getColor(R.color.snow));
    view.setGravity(Gravity.CENTER);

    LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(dpToPx(150),dpToPx(150));
    layoutParams.gravity = Gravity.CENTER;
    imageView.setLayoutParams(layoutParams);
    imageView.setImageDrawable(ContextCompat.getDrawable(this.getApplicationContext(),R.drawable.logo));

    view.addView(imageView);

    //mixpanel.track("App Open");

    return view;
  }

  public static int dpToPx(int dp){
    return (int) (dp * Resources.getSystem().getDisplayMetrics().density);
  }

  /*@Override
  public void setPermissionListener(PermissionListener listener){
    this.listener = listener;
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
    if(listener != null){
      listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  }*/
}
