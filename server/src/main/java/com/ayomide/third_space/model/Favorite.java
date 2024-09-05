package com.ayomide.third_space.model;

public class Favorite {
    private int id;
    private int userId;
    private int spaceId;

    public Favorite(){}

    public Favorite(int id, int userId, int spaceId){
        this.id = id;
        this.userId = userId;
        this.spaceId = spaceId;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getSpaceId() {
        return spaceId;
    }

    public void setSpaceId(int spaceId) {
        this.spaceId = spaceId;
    }
}
